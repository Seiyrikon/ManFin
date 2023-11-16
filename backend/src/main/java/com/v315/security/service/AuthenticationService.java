package com.v315.security.service;

import org.springframework.stereotype.Service;

import com.v315.security.shared.AuthenticationRequest;
import com.v315.security.shared.AuthenticationResponse;
import com.v315.security.shared.RegisterRequest;

@Service
public interface AuthenticationService {
    
    public AuthenticationResponse register(RegisterRequest request);

    public AuthenticationResponse authenticate(AuthenticationRequest request);
}
