-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "profile_picture" TEXT,
    "nick_name" TEXT NOT NULL,
    "status" BOOLEAN DEFAULT true,
    "seller" BOOLEAN DEFAULT false,
    "description" TEXT,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT E'USER',
    "banner" TEXT,
    "average_qualification" INTEGER,
    "counter_views_store" INTEGER DEFAULT 0,
    "password" TEXT NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Telephone" (
    "id" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "country_code" TEXT NOT NULL,
    "region_code" TEXT NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,

    CONSTRAINT "Telephone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deposit_Money" (
    "id" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Deposit_Money_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "average_qualification" INTEGER,
    "name_product" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "specs" TEXT,
    "details" TEXT,
    "color" TEXT,
    "tags_product" TEXT,
    "video" TEXT,
    "main_picture" TEXT,
    "gallery" TEXT,
    "image_3d" TEXT,
    "status" TEXT,
    "counter_views_product" INTEGER DEFAULT 0,
    "collection" VARCHAR,
    "stock" INTEGER DEFAULT 0,
    "offer" INTEGER DEFAULT 0,
    "highlight_level" INTEGER DEFAULT 0,
    "featured" BOOLEAN NOT NULL DEFAULT true,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoriesId" TEXT,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" TEXT NOT NULL,
    "name_category" VARCHAR NOT NULL,
    "banner_category" TEXT,
    "picture_category" TEXT,
    "icon_category" TEXT,
    "status_category" TEXT,
    "counter_views_category" INTEGER DEFAULT 0,
    "description" TEXT NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subcategories" (
    "id" TEXT NOT NULL,
    "nome_subcategory" TEXT NOT NULL,
    "banner_subcategory" TEXT,
    "picture_subcategory" TEXT,
    "icono_subcategory" TEXT,
    "status_subcategory" TEXT,
    "counter_views_subcategory" INTEGER DEFAULT 0,
    "description" TEXT NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoriesId" TEXT,

    CONSTRAINT "Subcategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wallets" (
    "id" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Wallets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_nick_name_key" ON "User"("nick_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Categories_name_category_key" ON "Categories"("name_category");

-- CreateIndex
CREATE UNIQUE INDEX "Subcategories_nome_subcategory_key" ON "Subcategories"("nome_subcategory");

-- AddForeignKey
ALTER TABLE "Telephone" ADD CONSTRAINT "Telephone_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deposit_Money" ADD CONSTRAINT "Deposit_Money_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Products" ADD CONSTRAINT "Products_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "Categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subcategories" ADD CONSTRAINT "Subcategories_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "Categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wallets" ADD CONSTRAINT "Wallets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
