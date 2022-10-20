import { DataSource, ObjectLiteral, EntityTarget, Repository } from "typeorm";
import auto from "../models/entities/Lugar";
import usuario from "../models/entities/Usuario";


export default class DatabaseConnection{
    private static dataSource?: DataSource;

    public static async getConnectedInstance(): Promise<DataSource> {
        if(!DatabaseConnection.dataSource){
            DatabaseConnection.dataSource = new DataSource({
                type: 'mysql',
                host: '127.0.0.1',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'xtasis',
                synchronize: true,
                entities: [usuario, auto]

            });
        }
        if(!DatabaseConnection.dataSource.isInitialized){
            await DatabaseConnection.dataSource.initialize();
        }
        return DatabaseConnection.dataSource;
    }

    public static async getRepository<Entity extends ObjectLiteral>(
        entityTarget: EntityTarget<Entity>
    ): Promise<Repository<Entity>>{
        const connection = await DatabaseConnection.getConnectedInstance();
        return connection.getRepository(entityTarget);
    }

}