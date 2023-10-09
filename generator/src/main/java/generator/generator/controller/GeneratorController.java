package generator.generator.controller;

import java.util.Random;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class GeneratorController {
    @GetMapping("/generate-token")
    public String index(@RequestParam(name = "digits", required = false) String digits) {
        int length = 10;
        String[] digitsArray = null;
        if (digits != null && !digits.isEmpty()) {
            digitsArray = digits.split(",");
            length = digitsArray.length;
        }        
        StringBuilder tokenBuilder = new StringBuilder();
        Random random = new Random();
        
        for (int i = 0; i < 16; i++) {
            if (i%4 == 0 && i != 0) {
                tokenBuilder.append("-");
            }
            int randomNumber = random.nextInt(length);
            if (digitsArray == null) {
                tokenBuilder.append(randomNumber);
            } else {
                tokenBuilder.append(digitsArray[randomNumber]);
            }
        }
        
        return tokenBuilder.toString();
    }
}