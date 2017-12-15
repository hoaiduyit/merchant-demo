package com.example.demo.controller;

import com.example.demo.model.entity.Account;
import com.example.demo.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

@Controller
public class DemoController {

    @Autowired
    private AccountService service;

    @GetMapping("/")
    public String welcome() {
        return "index";
    }

    @PostMapping(value = "/home", consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE + ";charset=UTF-8")
    public ModelAndView loginIn(@RequestParam(name = "email") String email,
                                @RequestParam(name = "password") String password) throws UnsupportedEncodingException, NoSuchAlgorithmException {
        return service.loginIn(email, password);
    }

    @GetMapping(value = "/home")
    public ResponseEntity getAllAccount(){
        List<Account> accountList = service.getAllAccount();
        return ResponseEntity.ok(accountList);
    }

    @PostMapping(value = "/home/create")
    public void createAccount(@RequestBody Account account) throws NoSuchAlgorithmException {
        service.createAccount(account);
    }

    @PostMapping(value = "/home/update")
    public void updateAccount(@RequestBody Account account) {
        service.updateAccount(account);
    }
}
