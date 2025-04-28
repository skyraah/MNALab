module.exports = [
    {
        // 指定代码运行的环境
        languageOptions: {
            ecmaVersion: 6
        },
        // 添加 JSDoc 插件
        plugins: {
            jsdoc: require("eslint-plugin-jsdoc")
        },
        // 规则配置
        rules: {
            // 【2.2.1 缩进】 - 使用 4 个空格进行缩进，不得使用 2 个空格或 tab 字符
            "indent": ["error", 4, {
                "SwitchCase": 1, // switch 的 case 子句缩进 1 个层级
                "VariableDeclarator": 1, // 变量声明缩进 1 个层级
                "outerIIFEBody": 1, // 立即执行函数外部的缩进为 1 个层级
                "MemberExpression": 1, // 多行属性链的缩进为 1 个层级
                "FunctionDeclaration": { "parameters": 1, "body": 1 }, // 函数声明的参数和函数体缩进 1 个层级
                "FunctionExpression": { "parameters": 1, "body": 1 }, // 函数表达式的参数和函数体缩进 1 个层级
                "CallExpression": { "arguments": 1 }, // 函数调用的参数缩进 1 个层级
                "ArrayExpression": 1, // 数组元素缩进 1 个层级
                "ObjectExpression": 1, // 对象属性缩进 1 个层级
                "ImportDeclaration": 1 // import 语句缩进 1 个层级
            }],
            "no-console": "warn",

            // 【2.2.2 空格】
            // 二元运算符两侧必须有一个空格，一元操作符与操作对象之间不允许有空格
            "space-infix-ops": ["error", { "int32Hint": false }], // 要求操作符周围有空格，禁用 int32Hint 选项

            // 左花括号前必须有一个空格
            "space-before-blocks": ["error", "always"], // 块语句前始终有空格

            // if / else / for / while / function 等关键字后必须有一个空格
            "keyword-spacing": ["error", {
                "before": true,
                "after": true,
                "overrides": {
                    "const": { "after": true }
                }
            }], // 关键字前后都要求有空格

            // 对象字面量中冒号前不允许有空格，冒号后必须有一个空格
            "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],

            // 函数名与小括号之间不允许有空格
            "func-call-spacing": ["error", "never"], // 函数调用时函数名和括号间不允许有空格

            // 小括号内部前后不允许有空格
            "space-in-parens": ["error", "never"], // 小括号内部不允许有空格

            // 逗号后面必须有空格，前面不允许有空格
            "comma-spacing": ["error", { "before": false, "after": true }],

            // 分号后面必须有空格，前面不允许有空格
            "semi-spacing": ["error", { "before": false, "after": true }],

            // 禁止多余的空格
            "no-multi-spaces": "error", // 禁止出现多个连续空格

            // 代码块内开括号后和闭括号前有空格
            "block-spacing": ["error", "always"], // 代码块内部前后需要有空格

            // 对象字面量的大括号内需要有空格
            "object-curly-spacing": ["error", "always"], // 大括号内部需要有空格，如 { foo: bar }

            // 数组字面量的中括号内不允许有空格
            "array-bracket-spacing": ["error", "never"], // 数组括号内部不允许有空格，如 [1, 2, 3]

            // switch 的冒号前后空格规则
            "switch-colon-spacing": ["error", { "after": true, "before": false }], // 冒号后有空格，前面无空格

            // 【2.2.3 换行】
            // 每行不超过 120 个字符
            "max-len": ["error", {
                "code": 120, // 每行代码最大长度为 120 个字符
                "ignoreComments": true, // 忽略注释行
                "ignoreUrls": true, // 忽略包含 URL 的行
                "ignoreStrings": true, // 忽略字符串
                "ignoreTemplateLiterals": true // 忽略模板字符串
            }],

            // 运算符处换行时，运算符应该放在行末，而不是行首
            "operator-linebreak": ["error", "after", {
                "overrides": { "?": "before", ":": "before" } // 三元运算符的 ? 和 : 例外，应该放在行首
            }],

            // 在换行的情况下，逗号放在行末
            "comma-style": ["error", "last"], // 逗号应该放在当前行的末尾

            // 禁止行尾有空格
            "no-trailing-spaces": "error", // 禁止行尾出现空格

            // 【2.2.4 语句】
            // 条件/循环语句必须使用花括号包裹，即使只有一行也不例外
            "curly": ["error", "all"], // 所有的条件和循环语句块都必须使用大括号

            // 大括号风格要求
            "brace-style": ["error", "1tbs", { "allowSingleLine": true }], // 使用 1tbs 风格，允许单行语句块

            // 语句结尾需要分号
            "semi": ["error", "always"], // 语句末尾始终要求使用分号

            // 【3.2 条件】
            // 必须使用 === 和 !==，不允许使用 == 和 !=，除了与 null 比较时可以使用 == null
            // "eqeqeq": ["error", "always", { "null": "ignore" }], // 始终使用 === 和 !==，但与 null 比较时可以使用 ==

            // 【3.4.2 类型转换】
            // 使用 parseInt() 时必须指定第二个参数（基数）
            "radix": "error", // 使用 parseInt() 时必须指定基数

            // 【3.5 字符串】
            // 字符串使用单引号而非双引号
            "quotes": ["error", "double", {
                "avoidEscape": true, // 允许字符串包含单引号时使用双引号以避免转义
                "allowTemplateLiterals": true // 允许使用模板字符串
            }],

            // 【3.6 对象】
            // 禁止使用 Object 构造函数创建对象，应使用对象字面量
            "no-new-object": "error", // 禁止使用 new Object()

            // 【3.7 数组】
            // 禁止使用 Array 构造函数创建数组，应使用数组字面量
            "no-array-constructor": "error", // 禁止使用 new Array()

            // 【新增规则1】常量只允许使用大写字母、_与$
            // "id-match": ["error", "^[A-Z][A-Z0-9_$]*$", { "properties": false, "onlyDeclarations": true, "ignoreDestructuring": true }], // 常量命名规则

            // 【新增规则2】只允许使用let声明变量，禁止使用var
            "no-var": "error", // 禁止使用 var 声明变量，应使用 let 或 const

            // 【新增规则3】函数需要使用 JSDoc 描述参数和函数本身的作用
            "jsdoc/require-jsdoc": ["error", {
                "publicOnly": false,
                "require": {
                    "FunctionDeclaration": true,
                    "MethodDefinition": true,
                    "ClassDeclaration": true,
                    "ArrowFunctionExpression": false,
                    "FunctionExpression": true
                }
            }],
            "jsdoc/require-description": ["warn", { "descriptionStyle": "tag" }], // 要求 JSDoc 包含描述
            "jsdoc/require-param": ["error"], // 要求记录所有函数参数
            "jsdoc/require-param-description": ["off"], // 要求参数描述
            "jsdoc/require-param-type": ["warn"], // 要求参数类型
            "jsdoc/require-returns": ["warn", {
                "forceReturnsWithAsync": true
            }], // 要求记录返回值
            "jsdoc/require-returns-description": ["warn"], // 要求返回值描述

            // 【其他规则】
            // 限制连续空行的数量
            "no-multiple-empty-lines": ["error", {
                "max": 2, // 最多允许连续 2 个空行
                "maxEOF": 1 // 文件末尾最多允许 1 个空行
            }],

            // 块级语句内容不允许有空行填充
            "padded-blocks": ["error", "never", { "allowSingleLineBlocks": true }], // 禁止块级内容与块级开始和结束之间出现空行

            // 要求使用驼峰命名法
            "camelcase": ["error", { "properties": "always", "ignoreDestructuring": true }], // 强制属性名称使用驼峰命名法

            // 禁止出现未使用的变量
            "no-unused-vars": ["warn", {
                "vars": "local",
                "varsIgnorePattern": "^$.*", // 检查所有变量
                "args": "none" // 不检查函数参数
            }],

            // "prefer-const": ["error"]//推荐使用const，不允许未修改的变量使用let
        },
        // JSDoc 插件设置
        settings: {
            jsdoc: {
                tagNamePreference: {
                    returns: "returns"
                }
            }
        }
    }
];