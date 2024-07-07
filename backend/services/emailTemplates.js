const getStudentWelcomeEmail = (name, studentId, email, defaultPassword) => {
  const subject = "Welcome to Academix - Your Account Details";
  const text = `
    Hello ${name},

    Welcome to Academix!

    We are excited to have you join our platform. Here are your account details:

    - Student ID: ${studentId}
    - Email: ${email}
    - Password: ${defaultPassword}

    Please make sure to change your password on your first login, as this is a default password for your account.

    If you have any questions or need assistance, feel free to contact our support team.

    Best regards,
    The Academix Team
  `;

  return { subject, text };
};

const getTeacherWelcomeEmail = (name, teacherId, email, defaultPassword) => {
  const subject = "Welcome to Academix - Your Account Details";
  const text = `
    Hello ${name},

    Welcome to Academix!

    We are thrilled to have you join our teaching team. Here are your account details:

    - Teacher ID: ${teacherId}
    - Email: ${email}
    - Password: ${defaultPassword}

    Please make sure to change your password on your first login, as this is a default password for your account.

    If you have any questions or need assistance, feel free to contact our support team.

    Best regards,
    The Academix Team
  `;

  return { subject, text };
};

module.exports = { getStudentWelcomeEmail, getTeacherWelcomeEmail };
