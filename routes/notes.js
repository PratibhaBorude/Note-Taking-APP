const express = require('express')
const router = express.Router()
const Note = require('../models/note')
router.get('/',async(req,res) => {
    try{
        const notes = await Note.find()
        res.json(notes)
    }
    catch(err){
        res.send('Error'+err)
    }
    // console.log('Get request')
    // res.send('Get Request')
})
router.get('/:id',async(req,res) => {
    try{
        const note = await Note.findById(req.params.id)
        res.json(note)
    }
    catch(err){
        res.send('Error'+err)
    }
})
router.post('/',async(req,res)=>{
    const note=new Note({
        id:req.body.id,
        name: req.body.name,
        tech : req.body.tech,
        sub:req.body.sub
    });
try{
const a1= await note.save()
res.json(a1)
}
catch(err){
    res.send('Error')
}
})
router.patch('/:id', async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }

        // Check if the 'sub' field is being updated and ensure it's a boolean
        if (req.body.sub !== undefined) {
            if (typeof req.body.sub !== 'boolean') {
                return res.status(400).json({ message: 'Invalid type for sub. It should be a boolean.' });
            }

            // If 'sub' value has changed, update it
            if (note.sub !== req.body.sub) {
                note.sub = req.body.sub;
            } else {
                return res.status(400).json({ message: 'No change in sub value' });
            }
        }

        // If no fields were provided to update
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({ message: 'No fields provided for update' });
        }

        const updatedNote = await note.save();
        res.json(updatedNote);
    } catch (err) {
        res.status(500).send('Error: ' + err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const note = await Note.findByIdAndDelete(req.params.id);
        
        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }
        
        res.json({ message: 'Note deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
// router.delete('/no-id', async (req, res) => {
//     console.log('Delete request for /no-id received');
//     try {
//         const result = await Note.deleteMany({ id: { $exists: false } });
//         if (result.deletedCount > 0) {
//             res.json({ message: `${result.deletedCount} document(s) without 'id' were deleted.` });
//         } else {
//             res.json({ message: 'No documents without "id" were found.' });
//         }
//     } catch (err) {
//         res.status(500).send('Error: ' + err);
//     }
// });




module.exports = router
