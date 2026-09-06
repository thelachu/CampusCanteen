package com.campuscanteen.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;


@Getter
@Setter
@Entity
@Table(name = "menu_items")
public class MenuItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private String meal;

    @Column(nullable = false,precision = 10,scale = 2)
    private BigDecimal price;


    @Column(nullable = false)
    private String imageUrl;

    @Column(nullable = false)
    private Boolean available=true;
}
