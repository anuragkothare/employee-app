const express = require('express')
const router = express.Router()
const BodyParser = require('body-parser')

// Load Employee Model
const Employee = require('../../models/Employee')

router.get('/test', (req, res) => res.json({ msg: 'Employee Works' }) )


// @route POST api/employees/register
// @desc  Register Employee
// @access Public
router.post('/register', (req, res, next) => {
    try {
        Employee.findOne({
            email: req.body.email
        }, (err, employee) => {
            if (err) {
                return next(err);
            }
    
            if (employee) {
                return res.status(400).json({
                    email: 'Employee with this Email already exists'
                })
            } else {
                const newEmployee = new Employee({
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                    address: req.body.address
                })
    
                newEmployee.save()
                    .then(employee => res.json(employee))
                    .catch(err => {return res.send(500, { errorMessage: err.message });})
            }
    
        })
    } catch (error) {
        return next(err);
    }
    
        
})

// @route GET api/employees/
// @desc  Get all employees
// @access Public
router.get('/', (req, res, next) => {
    Employee.find((err, employees) => {
        if(err) {
            return next(err);
        }
        res.send(employees)
    })
})

// @route PUT api/employees/:employee_id
// @desc  Update  employee Info
// @access Public
router.put('/:employee_id', (req, res) => {
    Employee.findById(req.params.employee_id, (err, employee) => {
        if(err) {
            res.send(err)
        }
        employee.name = req.body.name
        employee.email = req.body.email
        employee.phone = req.body.phone
        employee.address = req.body.address

        employee.save((err) => {
            if(err) res.send(err)
            res.json({ message: 'Employee Detail Updated' })
        })
    })
})

// @route DELETE api/employees/:employee_id
// @desc  Delete  employee Info
// @access Public
router.delete('/:employeeId', (req, res) => {
    console.log(req.params.employeeId )
    Employee.findByIdAndRemove(req.params.employeeId , (err, employee) => {
        if(err) res.send(err)
        res.json({ message: 'Successfully deleted' })
    })
})


module.exports = router