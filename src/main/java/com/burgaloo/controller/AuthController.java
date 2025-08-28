package com.burgaloo.controller;

import com.burgaloo.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private UserRepository userRepository;

    private PasswordEncoder passwordEncoder;

    private JwtProvider jwtProvider
}
