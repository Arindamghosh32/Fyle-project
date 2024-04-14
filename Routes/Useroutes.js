const express = require('express');
const router = express.Router();

router.post('/calculate-tax', (req, res) => {
   
    const annual = parseInt(req.body.annual);
    const extra = parseInt(req.body.extra);
    const age = parseInt(req.body.age);
    const gross = parseInt(req.body.gross);

    
    if (!annual || !extra || !age || !gross || isNaN(annual) || isNaN(extra) || isNaN(age) || isNaN(gross)) {
        return res.status(400).json({ error: 'Enter all the fields' });
    }
    
    
    const totalIncome = annual + extra - gross;

   
    if (totalIncome > 800000) {
        
        let taxRate;
        if (age < 40) {
            taxRate = 0.3;
        } else if (age >= 40 && age < 60) {
            taxRate = 0.4;
        } else {
            taxRate = 0.1;
        }

        
        const taxableIncome = Math.max(totalIncome - 800000, 0);
        
        
        const taxAmount = taxableIncome * taxRate;

       
        return res.json({ taxAmount: taxAmount });
    } else {
        
        return res.json({ taxAmount: 0 });
    }
});

module.exports = router;
