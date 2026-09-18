# API Test Results

Run date:
Environment: Local development

| Test | Expected | Actual | Result |
|---|---|---|---|
| Health check | 200 | | Not run |
| Valid signup | 201; OTP email received | | Not run |
| Duplicate signup | 409 | | Not run |
| Invalid signup input | 400 | | Not run |
| Login before verification | 403 | | Not run |
| Correct OTP | 200; account verified | | Not run |
| Reuse consumed OTP | Rejected | | Not run |
| Expired OTP | Rejected | | Not run |
| OTP attempt limit | Further verification rejected | | Not run |
| Resend during cooldown | Rejected | | Not run |
| Resend after cooldown | New OTP email received | | Not run |
| Previous OTP after resend | Rejected | | Not run |
| Latest OTP after resend | Account verified | | Not run |
| Login with correct credentials | 200; access token returned | | Not run |
| Login with wrong password | 401 | | Not run |
| Profile with valid token | 200 | | Not run |
| Profile without token | 401 | | Not run |
| Profile with invalid token | 401 | | Not run |
| Profile with expired token | 401 | | Not run |
| Requests over rate limit | 429 | | Not run |