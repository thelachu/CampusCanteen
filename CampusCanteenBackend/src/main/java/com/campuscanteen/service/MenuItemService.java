package com.campuscanteen.service;

import com.campuscanteen.entity.MenuItem;
import com.campuscanteen.exception.ResourceFoundNotException;
import com.campuscanteen.repository.MenuItemRepository;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Setter
@Getter
public class MenuItemService {

    private final MenuItemRepository menuItemRepository;


    public MenuItemService(MenuItemRepository menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }

    public MenuItem addItem(MenuItem item){
        return menuItemRepository.save(item);
    }

    public List<MenuItem> getAllItems(){
        return menuItemRepository.findAll();
    }
    public List<MenuItem> getAvailableItems(){
        return menuItemRepository.findByAvailableTrue();
    }

    public MenuItem getItemById(Long id){
        return menuItemRepository.findById(id).orElseThrow(()->new ResourceFoundNotException("Menu item not found."));
    }

    public List<MenuItem> getByCategory(String category){
        return menuItemRepository.findByCategoryIgnoreCase(category);
    }

    public MenuItem updateItem(Long id,MenuItem updated){
        MenuItem existing =getItemById(id);
        existing.setName(updated.getName());
        existing.setCategory(updated.getCategory());
        existing.setMeal(updated.getMeal());
        existing.setPrice(updated.getPrice());
        existing.setImageUrl(updated.getImageUrl());
        existing.setAvailable(updated.getAvailable());

        return menuItemRepository.save(existing);
    }

    public void deleteItem(Long id){
        if(!menuItemRepository.existsById(id)){
            throw new ResourceFoundNotException("Menu item not found.");
        }
        menuItemRepository.deleteById(id);
    }

    public MenuItem updateAvailability(Long id,Boolean available){
        MenuItem item=getItemById(id);
        item.setAvailable(available);
        return menuItemRepository.save(item);
    }
}
