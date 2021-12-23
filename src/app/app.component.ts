import { Component } from '@angular/core';
import { authCodeFlowConfig } from './sso.config';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listing2';
  constructor(private oauthService: OAuthService) {
    this.configureSingleSignOn();
  }

  configureSingleSignOn() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  logIn() {
    this.oauthService.initLoginFlow();
  }

  logOut() {
    this.oauthService.logOut();
  }

  get token() {
    let claim: any = this.oauthService.getIdentityClaims();
    return claim ? claim : null;
  }
}
