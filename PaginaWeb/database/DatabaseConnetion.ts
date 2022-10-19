import { DataSource, ObjectLiteral, EntityTarget, Repository} from "typeorm";
import Usuario from "../models/entities/Usuario";
import Lugares from "../models/entities/Lugar";

export default class DatabaseConnection
{
    private static dataSource?: DataSource;

    public static async getConnectionInstance(): Promise<DataSource>
    {
        if(!DatabaseConnection.dataSource)
        {
            DatabaseConnection.dataSource = new DataSource({
                type: 'mysql',
                host: '127.0.0.1',
                port: 3306,
                username: 'root',
                password: '12345admin',
                database: 'car_shop',
                synchronize: true,
                entities: [Usuario, Lugares]
            })
        }

        if(!DatabaseConnection.dataSource.isInitialized)
        {
            await DatabaseConnection.dataSource.initialize();
        }

        return DatabaseConnection.dataSource
    }

    public static async getRepository<Entity extends ObjectLiteral>(entityTarget: EntityTarget<Entity>) : Promise<Repository<Entity>>
    {
        const connection = await DatabaseConnection.getConnectionInstance();
        return connection.getRepository(entityTarget);
    }
}
