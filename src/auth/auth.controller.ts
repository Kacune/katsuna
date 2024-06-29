import { Controller, Get, HttpStatus, Req, Res, UseGuards } from '@nestjs/common';

@Controller('auth')
export class AuthController {
/*
    @Get()
    @UseGuards(GoogleOauthGuard) 
    async googleAuth() {}

    @Get('redirect')
    @UseGuards(GoogleOauthGuard)
    async googleAuthRedirect(@Req() req, @Res() res: Response) {
        const token = await this.authService.signIn(req.user);        
        res.cookie('access_token', token, {
            maxAge: 2592000000,
            sameSite: true,
            secure: false
        });

        // return token;
        //return this.authService.googleLogin(req.user);
        return res.redirect('/profile');
    }*/
}
