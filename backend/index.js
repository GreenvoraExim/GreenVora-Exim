require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const { connectDB } = require("./utils/db");

const app = express();

const PORT = process.env.PORT || 3000;

// ==============================
// ROUTES
// ==============================

const enquiryRoutes = require("./routes/enquiry");
const heroRoutes = require("./routes/hero");
const aboutRoutes = require("./routes/about");
const serviceRoutes = require("./routes/service");
const productRoutes = require("./routes/product");
const domesticRoutes = require("./routes/domestic");

const { seedDefaults } = require("./utils/seed");
const { warmProductsCache } = require("./controllers/productController");


// ==============================
// CORS SETTINGS
// ==============================

const allowedOrigins = new Set([
  "http://localhost:5173",
  "http://127.0.0.1:5173",

  // Old Render frontend
  "https://greenvora-exim-frontend.onrender.com",

  // NEW GreenVora Render frontend
  "https://greenvora-exim.onrender.com",

  // Official GreenVora domain
  "https://greenvoraexim.com",
  "https://www.greenvoraexim.com",
]);

const allowedHostnames = new Set([
  "localhost",
  "127.0.0.1",

  // Old Render frontend
  "greenvora-exim-frontend.onrender.com",

  // NEW GreenVora Render frontend
  "greenvora-exim.onrender.com",

  // Official GreenVora domain
  "greenvoraexim.com",
  "www.greenvoraexim.com",
]);

const corsOptions = {
  origin: (origin, cb) => {

    // Allow server-to-server requests
    if (!origin) {
      return cb(null, true);
    }

    // Check complete origin
    if (allowedOrigins.has(origin)) {
      return cb(null, true);
    }

    // Check hostname
    try {
      const url = new URL(origin);

      if (allowedHostnames.has(url.hostname)) {
        return cb(null, true);
      }
    } catch (_) {
      // Invalid origin
    }

    return cb(
      new Error(`CORS blocked for origin: ${origin}`)
    );
  },

  credentials: true,

  methods: [
    "GET",
    "POST",
    "PUT",
    "PATCH",
    "DELETE",
    "OPTIONS",
  ],

  allowedHeaders: [
    "Content-Type",
    "Authorization",
  ],
};

app.use(cors(corsOptions));

app.options(/.*/, cors(corsOptions));


// ==============================
// EXPRESS SETTINGS
// ==============================

app.use(express.json());


// ==============================
// ROOT API
// ==============================

app.get("/", (req, res) => {

  const dbReady =
    mongoose.connection.readyState === 1;

  res.json({
    service: "GreenVora API",

    status: dbReady
      ? "ready"
      : "starting",

    db: dbReady
      ? "connected"
      : "disconnected",

    health: "/api/health",

    hint:
      "GreenVora backend API is running.",
  });
});


// ==============================
// API ROUTES
// ==============================

app.use(
  "/api/enquiry",
  enquiryRoutes
);

app.use(
  "/api/hero",
  heroRoutes
);

app.use(
  "/api/about",
  aboutRoutes
);

app.use(
  "/api/services",
  serviceRoutes
);

app.use(
  "/api/products",
  productRoutes
);

app.use(
  "/api/domestic-products",
  domesticRoutes
);


// ==============================
// HEALTH CHECK
// ==============================

app.get(
  "/api/health",
  (req, res) => {

    const dbReady =
      mongoose.connection.readyState === 1;

    res
      .status(dbReady ? 200 : 503)
      .json({
        ok: dbReady,

        db: dbReady
          ? "connected"
          : "disconnected",
      });
  }
);


// ==============================
// OPTIONAL FRONTEND SERVING
// ==============================

const distIndex =
  path.join(
    __dirname,
    "dist",
    "index.html"
  );

if (
  process.env.SERVE_FRONTEND === "true" &&
  fs.existsSync(distIndex)
) {

  app.use(
    express.static(
      path.join(
        __dirname,
        "dist"
      )
    )
  );

  app.get(
    /.*/,
    (req, res) => {

      res.sendFile(
        distIndex
      );

    }
  );
}


// ==============================
// GLOBAL ERROR HANDLER
// ==============================

app.use(
  (err, req, res, next) => {

    console.error(
      "🚨 500 ERROR:",
      err.message
    );

    console.error(
      "Stack:",
      err.stack
    );

    res
      .status(500)
      .json({
        success: false,

        message:
          "Server error: " +
          err.message,
      });
  }
);


// ==============================
// START SERVER
// ==============================

async function start() {

  try {

    await connectDB();

    await seedDefaults();

    await warmProductsCache();

    console.log(
      "Data layer ready (DB + cache warmed)"
    );

  } catch (err) {

    console.error(
      "Data layer init failed:",
      err.message
    );

  }

  app.listen(
    PORT,
    () => {

      console.log(
        `Server running on port ${PORT}`
      );

      console.log(
        `Production mode: ${
          process.env.NODE_ENV ===
          "production"
        }`
      );

    }
  );
}

start();
