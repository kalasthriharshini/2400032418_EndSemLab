package com.klef.fsad.exam;

import org.hibernate.*;
import org.hibernate.cfg.Configuration;
import java.util.Date;

public class ClientDemo {
    public static void main(String[] args) {

        Configuration cfg = new Configuration().configure();
        SessionFactory sf = cfg.buildSessionFactory();
        Session session = sf.openSession();

        Transaction tx = session.beginTransaction();

        // INSERT
        Course c = new Course("Java", "Core Java", new Date(), "Active");
        session.save(c);

        tx.commit();
        System.out.println("Inserted");

        // FETCH
        Course fetched = session.get(Course.class, c.getId());

        System.out.println("ID: " + fetched.getId());
        System.out.println("Name: " + fetched.getName());

        session.close();
        sf.close();
    }
}