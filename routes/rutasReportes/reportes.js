let Reporte = require('../../models/modelsReportes/reportes');

module.exports = (app) => {

    app.get('/reportes', (req, res) => {
        Reporte.recuperarReportes({}, (error, reportes) => {
            if (error) {
                res.status(400).json({
                    error: error,
                    success: false,
                    msg: "error al recuperar reportes"
                });
            } else {
                res.status(200).json(reportes);
            }
        });
    });

    app.post('/reportes', (req, res) => {
        Reporte.guardarReportes(req.body, (error, reporte) => {
            if (error) {
                res.status(400).json({
                    error: error,
                    success: false,
                    msg: "error al guardar reporte"
                });
            } else {
                res.status(200).json(reporte);
            }
        });
    });

    app.get('/reportes/:id', (req, res) => {
        let id = req.params.id;
        Reporte.recuperarReporteEspecifico(id, (error, reporte) => {
            if (error) {
                res.status(400).json({
                    error: error,
                    success: false,
                    msg: "error al recuperar reporte"
                });
            } else {
                res.status(200).json(reporte);
            }
        });
    });

    app.put('/reportes/:id', (req, res) => {
        let id = req.params.id;
        let reporte = req.body;
        Reporte.editarReporte(id, reporte, (error, reporte) => {
            if (error) {
                res.status(400).json({
                    error: error,
                    success: false,
                    msg: "error al editar reporte"
                });
            } else {
                res.status(200).json(reporte);
            }
        });
    });

    app.delete('/reportes/:id', (req, res) => {
        let id = req.params.id;
        Reporte.eliminarReporte(id, (error, reporte) => {
            if (error) {
                res.status(400).json({
                    error: error,
                    success: false,
                    msg: "error al eliminar reporte"
                });
            } else {
                res.status(200).json(reporte);
            }
        });
    });

}