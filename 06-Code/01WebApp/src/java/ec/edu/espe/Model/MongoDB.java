
package ec.edu.espe.Model;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;


    public class MongoDB {
    private MongoDB instance;
    private MongoClient mongoClient;
    private MongoDatabase mongoDataBase;
    private MongoClientURI uri;
    private MongoCollection<Document> mongoCollection;

    public MongoDB getInstance() {
        return instance;
    }

    public void setInstance(MongoDB instance) {
        this.instance = instance;
    }

    public MongoClient getMongoClient() {
        return mongoClient;
    }

    public void setMongoClient(MongoClient mongoClient) {
        this.mongoClient = mongoClient;
    }

    public MongoDatabase getMongoDataBase() {
        return mongoDataBase;
    }

    public void setMongoDataBase(MongoDatabase mongoDataBase) {
        this.mongoDataBase = mongoDataBase;
    }

    public MongoClientURI getUri() {
        return uri;
    }

    public void setUri(MongoClientURI uri) {
        this.uri = uri;
    }

    public MongoCollection<Document> getMongoCollection() {
        return mongoCollection;
    }

    public void setMongoCollection(MongoCollection<Document> mongoCollection) {
        this.mongoCollection = mongoCollection;
    }
    
    
    
    }
   
    

