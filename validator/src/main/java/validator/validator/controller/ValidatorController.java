package validator.validator.controller;

import java.util.Random;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class ValidatorController {
    @GetMapping("/validate-token")
    public boolean index(@RequestParam(name = "token") String token) {
        if (token == null || token.length() == 0) {
            return false;
        }
        int count = 0;
        int sum = 0;
        boolean alternate = false;
        for (int i = token.length() - 1; i >= 0; i--) {
            char c = token.charAt(i);
            if (!Character.isDigit(c)) {
                if (c == '-') {
                continue;
                }
                return false;
            }
            count++;
            int n = Integer.parseInt(String.valueOf(c));
            if (alternate) {
                n *= 2;
                if (n > 9) {
                    n = (n % 10) + 1;
                }
            }
            sum += n;
            alternate = !alternate;
        }
        return (sum % 10 == 0 && count>0);
    }
}