package com.campuscanteen.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id",unique = true)
    private User user;

    @OneToMany(mappedBy = "cart" ,cascade=CascadeType.ALL,orphanRemoval = true)
    private List<CartItem> items = new ArrayList<>();
}
