import {ExecutionContext, Injectable} from '@nestjs/common'
import {AuthGuard as NestAuthGuard} from '@nestjs/passport'

@Injectable()
export class JwtAuthGuard extends NestAuthGuard('jwt') {
    canActivate(context:ExecutionContext):any{
        return super.canActivate(context)
    }
}