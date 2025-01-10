import { Icategories } from '../../interfaces/category.Interface.js';
import { Category } from '../../schemas/MongoDB/index.js';

export class MongoCategories extends Icategories {
    async getCategories() {
        try {
            return await Category.find().lean();
        } catch (err) {
            throw err;
        }
    }

    async getCategory(categoryId) {
        try {
            return await Category.findOne({
                category_id: categoryId,
            }).lean();
        } catch (err) {
            throw err;
        }
    }

    async categoryExistance(categoryId) {
        try {
            return await Category.findOne({ category_id: categoryId }).lean();
        } catch (err) {
            throw err;
        }
    }

    async createCategory(categoryId, categoryName) {
        try {
            const category = await Category.create({
                category_id: categoryId,
                category_name: categoryName,
            });
            return category.toObject();
        } catch (err) {
            throw err;
        }
    }

    async deleteCategory(categoryId) {
        try {
            return await Category.findOneAndDelete({
                category_id: categoryId,
            }).lean();
        } catch (err) {
            throw err;
        }
    }

    async editCategory(categoryId, categoryName) {
        try {
            return await Category.findOneAndUpdate(
                { category_id: categoryId },
                { $set: { category_name: categoryName } },
                { new: true }
            ).lean();
        } catch (err) {
            throw err;
        }
    }
}
