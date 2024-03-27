const express = require('express');
const cors = require('cors');
const app = express();

// تكوين CORS
app.use(cors());

// راحة الكود الخاص بخادمك

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
