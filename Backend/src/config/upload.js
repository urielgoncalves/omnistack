const multer = require('multer');
const path = require('path');//nativa do node para lidar com caminhos para windows e unix

//exportar configurações do multer
module.exports = {
storage: new multer.diskStorage({
    destination: path.resolve(__dirname, '..','..','uploads'),
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})
};
