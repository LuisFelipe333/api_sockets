

import { Router, Request, Response } from 'express';
var db = require('../database/db');
const router = Router();

router.get('/mensajesgit', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'GET cambio de git dos'
    });
});

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'GET cambio de git'
    });
});

router.post('/mensajes', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        ok: true,
        cuerpo,
        de
        // mensaje: 'POST listo!'
    });
});

router.post('/guardar-mansaje', (req: Request, res: Response)=>{
    var post = {User: req.body.de, Mensaje: req.body.cuerpo};
    db.query('', post, function (_err: any, _result: any) {
        if(_err) throw _err;
        
    });
    db.end();
});

router.post('/mensajes/:id', (req: Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id

    res.json({
        ok: true,
        cuerpo,
        de,
        id
        // mensaje: 'POST listo!'
    });
});

export default router;