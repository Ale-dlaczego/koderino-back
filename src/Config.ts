const Config = {
    SERVER_LISTEN_PORT: process.env.PORT || 3001,

    BCRYPT_SALT_ROUNDS: process.env.BCRYPT_SALT_ROUNDS || 10,

    JWT_SECRET: process.env.JWT_SECRET || 'SecretSup@r_SEcret',

};

export default Config;
