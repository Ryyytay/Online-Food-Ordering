package com.burgaloo.request;

import com.burgaloo.model.Address;
import lombok.Data;

@Data
public class OrderRequest {
    private Long restaurantId;
    private Address deliveryaddress;
}
