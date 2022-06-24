// Constructor para Consultorio
function Consultorio(name, patients) {
    let _name = name
    let _patients = patients || []


    Object.defineProperty(this, "_getName", {
        get: function() {
            return _name;
        },
    });

    Object.defineProperty(this, "_setName", {
        set: function(new_name) {
            return (_name = new_name);
        },
    });

    Object.defineProperty(this, "_getPatients", {
        get: function() {
            return _patients;
        },
    });

    Object.defineProperty(this, "_setPatient", {
        set: function(patient) {
            return _patients.push(patient);
        },
    });
}


// Prototype para el Objeto Consultorio, para nombre y paciente
Consultorio.prototype.getName = function() {
    return this._getName;
};

Consultorio.prototype.setName = function(new_name) {
    return (this._setName = new_name);
};

Consultorio.prototype.getPatients = function() {
    return this._getPatients;
};

Consultorio.prototype.setPatient = function(patient) {
    return (this._setPatient = patient);
};


// Constructor para Paciente
function Patient(name, age, rut, diagnostic) {
    let _name = name
    let _age = age
    let _rut = rut
    let _diagnostic = diagnostic

    Object.defineProperty(this, "_getName", {
        get: function() {
            return _name;
        },
    });

    Object.defineProperty(this, "_setName", {
        set: function(new_name) {
            return (_name = new_name);
        },
    });

    Object.defineProperty(this, "_getAge", {
        get: function() {
            return _age;
        },
    });

    Object.defineProperty(this, "_setAge", {
        set: function(new_age) {
            return (_age = new_age);
        },
    });

    Object.defineProperty(this, "_getRut", {
        get: function() {
            return _rut;
        },
    });

    Object.defineProperty(this, "_setRut", {
        set: function(new_rut) {
            return (_rut = new_rut);
        },
    });

    Object.defineProperty(this, "_getDiagnostic", {
        get: function() {
            return _diagnostic;
        },
    });

    Object.defineProperty(this, "_setDiagnostic", {
        set: function(new_diagnostict) {
            return (_diagnostic = new_diagnostict);
        },
    });
}

// Prototype para el Objeto Paciente, para nombre, edad, rut, diagnóstico
Patient.prototype.getName = function() {
    return this._getName;
};

Patient.prototype.setName = function(new_name) {
    return (this._setName = new_name);
};

Patient.prototype.getAge = function() {
    return this._getAge;
};

Patient.prototype.setAge = function(new_age) {
    return (this._setAge = new_age);
};

Patient.prototype.getRut = function() {
    return this._getRut;
};

Patient.prototype.setRut = function(new_rut) {
    return (this._setRut = new_rut);
};

Patient.prototype.getDiagnostic = function() {
    return this._getDiagnostic;
};

Patient.prototype.setDiagnostic = function(new_diagnostic) {
    return (this._setDiagnostic = new_diagnostic);
};


Patient.prototype.searchPatient = function(name) {
    if (this._getName == name) {
        return [this._getName, this._getAge, this._getRut, this._getDiagnostic];
    }

    return "no encontrado";
};

Consultorio.prototype.lisPatient = function() {
    let array_patient = []
    this._getPatients.forEach((patient) => {
        array_patient.push(
            patient.getName(),
            patient.getAge(),
            patient.getRut(),
            patient.getDiagnostic()
        );
    });
    return array_patient
}

let consultorio1 = new Consultorio("Ultra Estación")


let paciente1 = new Patient("Juan", 40, "111111111-1", "Hipertensión");
let paciente2 = new Patient("Luis", 50, "222222222-1", "Deabetes");
let paciente3 = new Patient("Diego", 44, "333333333-1", "Fractura");
let paciente4 = new Patient("José", 60, "444444444-1", "Cardiopatía");
let paciente5 = new Patient("María", 70, "555555555-1", "Hipotiroidismo");

consultorio1.setPatient(paciente1);
consultorio1.setPatient(paciente2);
consultorio1.setPatient(paciente3);
consultorio1.setPatient(paciente4);
consultorio1.setPatient(paciente5);

console.log(consultorio1.getName());
console.log(consultorio1.getPatients());



console.log(paciente1.searchPatient("Juan"));

console.log(consultorio1.lisPatient());