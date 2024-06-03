package com.example.blogmultiplatform.data

import com.example.blogmultiplatform.models.User
import com.example.blogmultiplatform.utils.Constants.DATABASE_NAME
import com.varabyte.kobweb.api.data.add
import com.varabyte.kobweb.api.init.InitApi
import com.varabyte.kobweb.api.init.InitApiContext
import kotlinx.coroutines.reactive.awaitFirst
import org.litote.kmongo.and
import org.litote.kmongo.eq
import org.litote.kmongo.reactivestreams.KMongo
import org.litote.kmongo.reactivestreams.getCollection

@InitApi
fun initMongoDB(
    context: InitApiContext
) {
    System.setProperty(
        "org.litote.mongo.test.mapping.service",
        "org.litote.kmongo.serialization.SerializationClassMappingTypeService"
    )
    context.data.add(MongoDB(context))
}
class MongoDB(private val context: InitApiContext) : MongoRepository {

    private val client = KMongo.createClient()
    private val database = client.getDatabase(DATABASE_NAME)
    private val userCollection = database.getCollection<User>()
    override suspend fun checkUserExistence(user: User): User? {
        return try {
            userCollection.find(
                and(
                    User::userName eq user.userName,
                    User::password eq user.password
                )
            ).awaitFirst()
        }catch (e: Exception) {
            context.logger.error(e.message.toString())
            null
        }
    }
}