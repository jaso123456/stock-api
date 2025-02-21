module.exports = (req, res) => {
  res.json({ 
    status: 'success',
    message: '股票分析完成',
    data: { code: req.query.code || '未提供' }
  });
};
