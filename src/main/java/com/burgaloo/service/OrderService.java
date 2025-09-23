package com.burgaloo.service;

import com.burgaloo.model.Order;
import com.burgaloo.model.User;
import com.burgaloo.request.OrderRequest;

public interface OrderService {

    public Order createOrder(OrderRequest order, User user);
}
