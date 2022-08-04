const Seat = require("../Modal/Seats");

exports.add = async (req, res) => {
  const { label } = req.body;
  const seat = new seat({ label });
  await seat.save();
  return res.json(seat);
};

exports.get = async (req, res) => {
  const seat = await Seat.find();
  res.json(seat);
};

exports.deleteSeat=async(req,res)=>{
    const {id}=req.params;
    await Seat.deleteOne({id});
    res.json({message:"seat deleted succefully"})
}
