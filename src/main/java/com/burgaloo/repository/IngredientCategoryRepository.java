package com.burgaloo.repository;

import com.burgaloo.model.IngredientCategory;
import com.burgaloo.model.IngredientsItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IngredientCategoryRepository extends JpaRepository<IngredientCategory, Long> {

    List<IngredientCategory> findByRestaurantId(Long id);

}
