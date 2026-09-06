package com.campuscanteen.controller;

import com.campuscanteen.entity.MenuItem;
import com.campuscanteen.service.MenuItemService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/menu-items")
@CrossOrigin(origins = "http://localhost:5173")
public class MenuItemController {

    private final MenuItemService menuItemService;

    public MenuItemController(MenuItemService menuItemService) {
        this.menuItemService = menuItemService;
    }

    // ADMIN - ADD MENU ITEM

    @PostMapping
    public ResponseEntity<MenuItem> addItem(
            @RequestBody MenuItem item) {

        MenuItem savedItem = menuItemService.addItem(item);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(savedItem);
    }


    // ADMIN - UPDATE MENU ITEM

    @PutMapping("/{id}")
    public ResponseEntity<MenuItem> updateItem(
            @PathVariable Long id,
            @RequestBody MenuItem item) {

        return ResponseEntity.ok(
                menuItemService.updateItem(id, item)
        );
    }


    // ADMIN - DELETE MENU ITEM

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(
            @PathVariable Long id) {

        menuItemService.deleteItem(id);

        return ResponseEntity.noContent().build();
    }


    // ADMIN - UPDATE AVAILABILITY

    @PatchMapping("/{id}/availability")
    public ResponseEntity<MenuItem> updateAvailability(
            @PathVariable Long id,
            @RequestParam Boolean available) {

        return ResponseEntity.ok(
                menuItemService.updateAvailability(id, available)
        );
    }


    // GET ALL AVAILABLE ITEMS

    @GetMapping
    public ResponseEntity<List<MenuItem>> getAllItems() {

        return ResponseEntity.ok(
                menuItemService.getAvailableItems()
        );
    }


    // GET ITEM BY ID

    @GetMapping("/{id}")
    public ResponseEntity<MenuItem> getItem(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                menuItemService.getItemById(id)
        );
    }


    // GET ITEMS BY CATEGORY

    @GetMapping("/category/{category}")
    public ResponseEntity<List<MenuItem>> getByCategory(
            @PathVariable String category) {

        return ResponseEntity.ok(
                menuItemService.getByCategory(category)
        );
    }
}