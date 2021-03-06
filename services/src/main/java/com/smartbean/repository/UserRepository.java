package com.smartbean.repository;

import com.smartbean.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository  extends JpaRepository<User, Long>, JpaSpecificationExecutor<User> {
    public User findByUsernameAndPassword(String userName, String password);
}
