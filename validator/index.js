exports.userSignupValidator = (req, res, next) => {
    req.check("nume", "Introduceti numele").notEmpty()
    req.check("prenume", "Introduceti prenumele").notEmpty()
    req.check("telefon", "Introduceti numarul de telefon").notEmpty()
    req.check("judet", "Introduceti judetul").notEmpty()
    req.check("localitate", "Introduceti localitatea").notEmpty()
    req.check("adresa", "Introduceti adresa").notEmpty()
    req.check("codPostal", "Introduceti codul postal").notEmpty()
    req.check("email", "Emailul trebuie sa contina intre 3 si 32 caractere")
        .matches(/.+\@.+\..+/)
        .withMessage("Emailul trebuie sa contina @")
        .isLength({
            min: 4,
            max: 32
        })
    req.check("password", "Introduceti parola").notEmpty()
    req.check("password")
        .isLength({min: 6})
        .withMessage("Parola trebuie sa contina cel putin 6 caractere")
        .matches(/\d/)
        .withMessage("parola trebuie sa contina cel putin un numar")

    const errors =req.validationErrors()
    if(errors) {
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({error: firstError})
    }
    next()
}