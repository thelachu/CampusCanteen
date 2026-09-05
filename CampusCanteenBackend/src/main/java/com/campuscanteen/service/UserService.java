package com.campuscanteen.service;

import com.campuscanteen.dto.LoginRequest;
import com.campuscanteen.dto.RegisterRequest;
import com.campuscanteen.entity.Role;
import com.campuscanteen.entity.User;
import com.campuscanteen.exception.DuplicateEmailException;
import com.campuscanteen.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;


    // REGISTER
    public User register(RegisterRequest request) {

        //Check duplicate email
        if (userRepository.existsByEmail(request.getEmail())) {

            throw new DuplicateEmailException(
                    "Email already registered"
            );
        }

        //Create user
        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());

        // Direct password
        user.setPassword(request.getPassword());

        user.setRole(Role.USER);

        return userRepository.save(user);
    }


    // LOGIN
    public User login(LoginRequest request) {

        User user = userRepository
                .findByEmail(request.getEmail())
                .orElseThrow(() ->
                        new IllegalArgumentException(
                                "Invalid email or password"
                        )
                );

        if (!request.getPassword()
                .equals(user.getPassword())) {

            throw new IllegalArgumentException(
                    "Invalid email or password"
            );
        }

        return user;
    }
}