---
name: "Things Shop"
description: "Full-stack eCommerce platform with PayPal payments, Cloudinary image hosting, Prisma + PostgreSQL, and role-based auth. Built with Next.js 14 App Router and server components throughout."
image: "../../assets/projects/things-shop.png"
stack: ["Next.js", "Prisma", "Cloudinary", "PayPal", "Auth.js"]
url: "https://thingsshop.vercel.app/"
repo: "https://github.com/USpiri/things-shop"
---

Things Shop is a full-stack eCommerce app that covers the complete purchase flow: browsing, cart management, checkout with PayPal, and order tracking — with a separate admin side for product and inventory management.

## Stack Decisions

The project uses **Next.js 14 App Router** with server components throughout. Data mutations go through server actions rather than a separate API layer, which keeps the client bundle lean and the data flow straightforward.

**Prisma + PostgreSQL** handles the product catalog, orders, and user data. A Docker Compose setup makes local development deterministic.

**Cloudinary** handles product image upload, storage, and delivery. Images are optimized and served from Cloudinary's CDN without any manual processing.

**PayPal SDK** powers the checkout. The integration covers order creation, payment capture, and confirmation — including error states and order status updates in the database.

**Auth.js** provides authentication with role-based access control: regular users can browse and purchase, admin users can manage products, inventory, and orders.

## Features

- Product catalog with search (via URL search params)
- Cart with inventory validation
- Database seeding for development
- Separate admin dashboard for product and stock management
