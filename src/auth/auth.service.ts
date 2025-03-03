import {
  Injectable,
  UnauthorizedException,
  Inject,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as bcrypt from 'bcrypt';
import { users } from '../db/schema';
import { eq } from 'drizzle-orm';
import { LoginDto, RegisterDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('DB') private db: NodePgDatabase,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    // Check if user exists
    const existingUser = await this.db
      .select()
      .from(users)
      .where(eq(users.email, registerDto.email));

    if (existingUser.length > 0) {
      throw new ConflictException('User already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    // Create user
    const [newUser] = await this.db
      .insert(users)
      .values({
        email: registerDto.email,
        password: hashedPassword,
      })
      .returning();

    // Generate JWT
    const token = this.jwtService.sign({
      sub: newUser.id,
      email: newUser.email,
    });

    return {
      user: {
        id: newUser.id,
        email: newUser.email,
      },
      token,
    };
  }

  async login(loginDto: LoginDto) {
    // Find user
    const [user] = await this.db
      .select()
      .from(users)
      .where(eq(users.email, loginDto.email));

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Generate JWT
    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
    });

    return {
      user: {
        id: user.id,
        email: user.email,
      },
      token,
    };
  }
}
