package game.idle.web;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.Collections;
import java.util.Map;

@Controller
public class webController {

    @GetMapping("/")
    public ModelAndView home(ModelAndView modelAndView) {
        modelAndView.setViewName("index");

        return modelAndView;
    }

    @GetMapping(value = "/data", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Map<String, String> getData() {

        return Collections.singletonMap("response", "10");
    }

    @PostMapping("/getData")
    @ResponseBody
    public String getData(@RequestBody String pool) {
        System.out.println(pool);
        return "123";
    }


}
