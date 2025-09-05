package com.burgaloo.service;

import com.burgaloo.model.Restaurant;
import com.burgaloo.model.User;
import com.burgaloo.request.CreateRestaurantRequest;
import org.springframework.data.annotation.CreatedBy;

import java.util.List;

public interface RestaurantService {
    public Restaurant createRestaurant(CreateRestaurantRequest req, User user);

    public Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest updatedRestaurant) throws Exception;

    public void deleteRestaurant(Long restaurantId) throws Exception;

    public List<Restaurant> getAllRestaurant();

    public List<Restaurant> searchRestaurant();

    public Restaurant findRestaurantById(Long id) throws Exception;

}
