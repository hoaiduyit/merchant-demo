package com.example.demo.service;

import com.example.demo.common.MD5Util;
import com.example.demo.model.entity.Account;
import com.example.demo.model.entity.Merchant;
import com.example.demo.model.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.servlet.ModelAndView;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public ModelAndView loginIn(String email, String password) throws UnsupportedEncodingException, NoSuchAlgorithmException {
        Account account = accountRepository.findByEmail(email);
        if (account != null){
            String passAfterEncode = MD5Util.Encrypt(password);
            if (passAfterEncode.equalsIgnoreCase(account.getPassword())){
                return new ModelAndView("home");
            } else {
                return new ModelAndView("error");
            }
        }
        return new ModelAndView("index");
    }

    public List<Account> getAllAccount(){
        Iterable<Account> iterable = accountRepository.findAll();
        if (iterable != null){
            Iterator<Account> iterator = iterable.iterator();
            List<Account> accountList = new ArrayList<>();
            while (iterator.hasNext()){
                accountList.add(iterator.next());
            }
            return accountList;
        }
        return null;
    }

    @Transactional
    public void createAccount(Account account) {
        Account acc = accountRepository.findByEmail(account.getEmail());
        if (acc == null){
            acc = new Account();
            acc.setEmail(account.getEmail());
            acc.setType(account.getType());
            acc.setPhoneNumber(account.getPhoneNumber());

            accountRepository.save(acc);
        }
    }
}
