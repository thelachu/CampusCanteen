package com.campuscanteen.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {
    public ResponseEntity<Map<String,String>> handleDuplicateEmail(DuplicateEmailException duplicateEmailException){
        Map<String,String> error=new HashMap<>();
        error.put("message",duplicateEmailException.getMessage());
        return ResponseEntity.status(HttpStatus.CONFLICT).body(error);
    }
}
