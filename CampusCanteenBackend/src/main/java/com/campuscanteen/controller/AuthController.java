package com.campuscanteen.controller;

import com.campuscanteen.dto.LoginRequest;
import com.campuscanteen.dto.LoginResponse;
import com.campuscanteen.dto.RegisterRequest;
import com.campuscanteen.entity.User;
import com.campuscanteen.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;

    //Register Controller
    @PostMapping("/register")
    public ResponseEntity<LoginResponse> register(
            @Valid @RequestBody RegisterRequest request) {

        User savedUser = userService.register(request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(toResponse(savedUser));
    }

    //Login Controller
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
        User user = userService.login(request);
        return ResponseEntity.ok(toResponse(user));
    }

    private LoginResponse toResponse(User user) {
        return new LoginResponse(
                user.getId(),
                user.getName(),
                user.getEmail(),
                user.getRole().name()
        );
    }
}