package com.sismics.docs.core.dao;

import com.sismics.docs.BaseTransactionalTest;
import com.sismics.docs.core.dao.UserDao;
import com.sismics.docs.core.model.jpa.User;
import com.sismics.docs.core.util.TransactionUtil;
// import com.sismics.docs.core.util.authentication.InternalAuthenticationHandler;
import org.junit.Assert;
import org.junit.Test;

import com.sismics.docs.core.dao.DocumentDao;
import com.sismics.docs.core.dao.dto.DocumentDto;
import com.sismics.docs.core.model.jpa.Document;
import java.util.*;

/**
 * Tests the persistance layer.
 * 
 * @author jitongz
 */
public class TestDocument extends BaseTransactionalTest {
    @Test
    public void testDocument() throws Exception {
        // TransactionUtil.commit_begin();
        // Create a user
        UserDao userDao = new UserDao();
        User user = new User();
        user.setUsername("username");
        user.setPassword("12345678");
        user.setEmail("toto@docs.com");
        user.setRoleId("admin");
        user.setStorageQuota(10L);
        String id = userDao.create(user, "me");

        TransactionUtil.commit();
        // Search a user by his ID
        user = userDao.getById(id);
        Assert.assertNotNull(user);
        Assert.assertEquals("toto@docs.com", user.getEmail());

        // // DocumentDao Test
        // DocumentDao documentDao = new DocumentDao();
        // Document document = new Document();

        // document.setTitle("title");
        // document.setDescription("description");
        // document.setSubject("subject");
        // document.setIdentifier("identifier");
        // document.setPublisher("publisher");
        // document.setFormat("format");
        // document.setSource("source");
        // document.setType("type");
        // document.setCoverage("coverage");
        // document.setRights("rights");
        // document.setLanguage("language");
        // document.setCreateDate(new Date());

        // String doc_id = documentDao.create(document, id);
        // TransactionUtil.commit();
        // Assert.assertNotNull(doc_id);
        // Document document1 = documentDao.getById(doc_id);
        // Assert.assertEquals("description", document1.getDescription());
        
        // Document Test
        Document document = new Document();

        document.setTitle("title");
        document.setDescription("description");
        document.setSubject("subject");
        document.setGpa("5");
        document.setSkills("6");
        document.setExperience("7");
        document.setEducation("8");
        document.setIdentifier("identifier");
        document.setPublisher("publisher");
        document.setFormat("format");
        document.setSource("source");
        document.setType("type");
        document.setCoverage("coverage");
        document.setRights("rights");
        document.setLanguage("language");
        document.setCreateDate(new Date());

        Assert.assertEquals("5", document.getGpa());
        Assert.assertEquals("6", document.getSkills());
        Assert.assertEquals("7", document.getExperience());
        Assert.assertEquals("8", document.getEducation());

        // DocumentDto Test
        DocumentDto documentDto = new DocumentDto();
        int i = 0;
        documentDto.setGpa("1");
        documentDto.setSkills("2");
        documentDto.setExperience("3");
        documentDto.setEducation("4");
        
        Assert.assertEquals("1", documentDto.getGpa());
        Assert.assertEquals("2", documentDto.getSkills());
        Assert.assertEquals("3", documentDto.getExperience());
        Assert.assertEquals("4", documentDto.getEducation());

        
    }
}
