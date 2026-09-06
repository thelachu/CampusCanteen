package com.campuscanteen.service;

import com.campuscanteen.repository.CartItemRepository;
import com.campuscanteen.repository.CartRepository;
import com.campuscanteen.repository.MenuItemRepository;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;

@Service
@Getter
@Setter
@AllArgsConstructor
public class CartService {

    private final CartRepository cartRepository;

    private final MenuItemRepository menuItemRepository;

    private final CartItemRepository cartItemRepository;


    
}
