import { Connection, createConnection, getConnectionOptions } from 'typeorm';
/*
interface IOptions {
    host: string;
}

getConnectionOptions().then((options) => {
    //console.log('Options:', options);
    const newOptions = options as IOptions;
    newOptions.host = "localhost";
    createConnection({
        ...options
    });
});*/

export default async (host: 'localhost'): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();

    return createConnection(
        Object.assign(defaultOptions, {
            host
        })
    )
}
