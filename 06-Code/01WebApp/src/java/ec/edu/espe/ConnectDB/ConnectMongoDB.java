package ec.edu.espe.ConnectDB;


import ec.edu.espe.Model.MongoDB;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.MongoSecurityException;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;


public class ConnectMongoDB {       
        MongoDB mongoDB = new MongoDB();
        public static MongoDatabase database;     
        
    public MongoDatabase connection (){
        String URI = "mongodb+srv://root:1234@isoftware.ua3y4od.mongodb.net/?retryWrites=true&w=majority";
        
        try {
            mongoDB.setUri(new MongoClientURI(URI));
            mongoDB.setMongoClient(new MongoClient(mongoDB.getUri()));
            mongoDB.setMongoDataBase(mongoDB.getMongoClient().getDatabase("iSoftware"));
            mongoDB.setMongoCollection(mongoDB.getMongoDataBase().getCollection((URI)));
            mongoDB.getMongoCollection().drop();         
        } catch (MongoSecurityException a) {
            mongoDB.setMongoDataBase(null);
        }
            return mongoDB.getMongoDataBase();
}
    
    public void ConnectionMongo(){
        ConnectMongoDB connectionmongodb = new ConnectMongoDB()  ;   
        database = connectionmongodb.connection(); 
    }
    
    public void save(Document document, String collection, MongoDatabase database) {
    MongoCollection<Document> collectionDocument = database.getCollection(collection);
    collectionDocument.insertOne(document);
    }
    public void update(Document document, String collection, MongoDatabase database) {
    MongoCollection<Document> collectionDocument = database.getCollection(collection);
    collectionDocument.updateOne(document, document);
    }
        
        
}
    
