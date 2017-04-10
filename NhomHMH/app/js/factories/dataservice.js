/*
 * IIFE to keep code safe and outside the global namespace
 */
(function(){

    /*
     * Declaring a factory service as part of the existing turtleFacts Module.
     */
    angular
        .module("myTestFacts")
        .factory("DataService", DataService);

    /*
     * Actual definition of the function used for this factory
     */
    function DataService(){
        /*
         * dataObj is used to simulate getting the data from a backend server
         * The object will hold data which will then be returned to the other
         * factory declared in js/factory/quiz.js which has this factory
         * as a dependency
         */

        var dataObj = {
            myTestData: myTestData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        // returning the dataObj to anything that uses this factory as a 
        // dependency
        return dataObj;
    }

    /*
     * all of the below variables are simulating data that would typically be 
     * retrieved using an HTTP call to an API endpoint.
     *
     * For simplicity sake this data is hardcoded into the app as this tutorial
     * is about building the angular app, not the backend.
     *
     * The correctAnswers variable would be retrieved when the user has 
     * finished the quiz and would be used to mark the users answers against 
     * the correct answers
     *
     * the quizQuestions is an array of objects, each containing data 
     * pertaining to a single question. This includes:
     *                          - The type of question: image or text
     *                          - Text of the question (aka the actual question)
     *                          - A set of 4 possible answers, either text or 
     *                              images as indicated above
     *                          - a selected flag which will be used to know if
     *                              the user has selected 
     *                          an answer yet.
     *                          - Whether the user got the question correct or 
     *                              not
     *
     * The final turtleData variable hold the information that will be 
     * displayed in the list view when the app loads. This includes the name 
     * and an image of each turtle as well as other information such as the 
     * location and the size of the turtles
     *
     */

    var correctAnswers = [2, 0, 2, 3, 1, 1, 1, 1, 2, 2];

    var quizQuestions  = [
        {
            type: "text",
            text: "Có một đàn vịt, cho biết 1 con đi trước thì có 2 con đi sau, 1 con đi sau thì có 2 con đi trước, 1 con đi giữa thì có 2 con đi 2 bên. Hỏi đàn vịt đó có mấy con?",
            possibilities: [
                {
                    answer: "1"
                },
                {
                    answer: "2"
                },
                {
                    answer: "3"
                },
                {
                    answer: "4"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Làm thế nào để qua được câu này?",
            possibilities: [
                {
                    answer: "Bỏ cuộc"
                },
                {
                    answer: "Cho tôi qua đi mà"
                },
                {
                    answer: "Không thể qua"
                },
                {
                    answer: "Câu này khó quá"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Sở thú bị cháy, con gì chạy ra đầu tiên?",
            possibilities: [
                {
                    answer: "con chim"
                },
                {
                    answer: "con rắn"
                },
                {
                    answer: "con người"
                },
                {
                    answer: "con tê giác"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Con Hổ bị xích vào gốc cây, sợi xích dài 30m. Có 1 bụi cỏ cách đấy 31m, làm sao con Hổ ăn được bụi cỏ?",
            possibilities: [
                {
                    answer: "Cắn đứt xích"
                },
                {
                    answer: "Húc đổ cây"
                },
                {
                    answer: "Gọi đồng bọn đến"
                },
                {
                    answer: "Không khả thi"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Người đẹp Monalisa không có thứ gì?",
            possibilities: [
                {
                    answer: "Tiền"
                },
                {
                    answer: "Chồng"
                },
                {
                    answer: "Lông chân"
                },
                {
                    answer: "Lông mày"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is the most common turtle in US waters?",
            possibilities: [
                {
                    answer: "Thứ 6"
                },
                {
                    answer: "Ly"
                },
                {
                    answer: "Út"
                },
                {
                    answer: "Cả"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Bệnh gì bác sỹ bó tay?",
            possibilities: [
                {
                    answer: "HIV"
                },
                {
                    answer: "Gãy tay"
                },
                {
                    answer: "Siđa"
                },
                {
                    answer: "Bệnh sĩ"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Có 3 thằng lùn xếp hàng dọc đi vào hang. Thằng đi sau cầm 1 cái xô, thằng đi giữa cầm 1 cái xẻng, hỏi thằng đi trước cầm gì?",
            possibilities: [
                {
                    answer: "Cầm đèn"
                },
                {
                    answer: "Cầm đầu"
                },
                {
                    answer: "Cầm dao"
                },
                {
                    answer: "Cầm xẻng"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Ở Việt Nam, rồng bay ở đâu và đáp ở đâu?",
            possibilities: [
                {
                    answer: "Hà Nội và Long An"
                },
                {
                    answer: "Hà Nội và Quảng Ninh"
                },
                {
                    answer: "Thăng Long và Hạ long"
                },
                {
                    answer: "Quảng Ninh và Long An"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Tay cầm cục thịt nắn nắn, tay vỗ mông là đang làm gì?",
            possibilities: [
                {
                    answer: "Nướng thịt"
                },
                {
                    answer: "Thái thịt"
                },
                {
                    answer: "Cho con bú"
                },
                {
                    answer: "Đấu vật"
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var myTestData = [
        {
            noidung: "Test IQ",
            anh: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQCmTe006pPuwe8kcfF2Kb897Wnqh7lt_eDl9LkcTaDtiUzRxSs",
            socauhoi: "26 câu hỏi.",
            thoigian: "24 phút.",
            khuyencao: "từ dễ đến khó.",
            baithi: "100% là hình ảnh, công bằng với tất cả mọi người bất kể thuộc quốc gia nào, dù có đi học hay không.",
            mota: "Khác với bài kiểm tra IQ, thi IQ cơ bản theo chuẩn quốc tế Test IQ, bài trắc nghiệm IQ tuyển dụng được xây dựng với các dạng câu hỏi phong phú hơn, nhằm đánh giá không những khả năng tư duy lập luận về hình vẽ mà còn có cả tính toán IQ số học, trí nhớ , kiến thức và tư duy không gian. Có thể nói Bài Test IQ tuyển dụng là bài trắc nghiệm IQ toàn diện nhất, là một trong ba loại hình IQ Test phổ biến nhất thế giới (Culture Fair IQ test – IQ test tuyển dụng – High Rank IQ test)"
        },
        {
            noidung: "Test IQ tuyển dụng",
            anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWWA0hYfNkzSTU4RMvH-vIIx2YqWN8VtzJlRVJkVHq3k-FydBMQ",
            socauhoi: "32 câu hỏi.",
            thoigian: "38 phút.",
            khuyencao: "từ dễ đến khó.",
            baithi: "Khi tuyển dụng nhân viên cho những vị trí cần đầu óc tính toán IQ, tư duy tốt.",
            mota: "Khác với bài kiểm tra IQ, thi IQ cơ bản theo chuẩn quốc tế Test IQ, bài trắc nghiệm IQ tuyển dụng được xây dựng với các dạng câu hỏi phong phú hơn, nhằm đánh giá không những khả năng tư duy lập luận về hình vẽ mà còn có cả tính toán IQ số học, trí nhớ , kiến thức và tư duy không gian. Có thể nói Bài Test IQ tuyển dụng là bài trắc nghiệm IQ toàn diện nhất, là một trong ba loại hình IQ Test phổ biến nhất thế giới (Culture Fair IQ test – IQ test tuyển dụng – High Rank IQ test)"
        },
        {
            noidung: "Test EQ",
            anh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqSVyhgspH55kD4O_1gHrqJ4gzg7ztLSZM7TQqwxRjythUut7b",
            socauhoi: "10 câu hỏi.",
            thoigian: "24 phút.",
            khuyencao: "từ dễ đến khó.",
            baithi: "Bài Test EQ về hành vi, trong khi mô hình EI Đặc Điểm thường đánh giá chỉ số EI bằng việc sử dụng các bài Eq test với câu hỏi tự trả lời, do đó có mối liên hệ mật thiết với tính cách của bạn.",
            mota: "Khác với bài kiểm tra IQ, thi IQ cơ bản theo chuẩn quốc tế Test IQ, bài trắc nghiệm IQ tuyển dụng được xây dựng với các dạng câu hỏi phong phú hơn, nhằm đánh giá không những khả năng tư duy lập luận về hình vẽ mà còn có cả tính toán IQ số học, trí nhớ , kiến thức và tư duy không gian. Có thể nói Bài Test IQ tuyển dụng là bài trắc nghiệm IQ toàn diện nhất, là một trong ba loại hình IQ Test phổ biến nhất thế giới (Culture Fair IQ test – IQ test tuyển dụng – High Rank IQ test)"
        },
        {
            noidung: "Test IQ high range",
            anh: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQjCmv_5Ue9lVZ56P7GOZYLRm_c-rEHJ7WmhIdoof-VcYG9TAAG",
            socauhoi: "30 câu hỏi.",
            thoigian: "không giới hạn.",
            khuyencao: "từ dễ đến khó.",
            baithi: "bài High Range hoàn toàn không có những đáp án gợi ý (câu a, b, c...) để người test chọn. Người đang kiểm tra IQ phải tự suy nghĩ ra đáp án và điền vào chỗ trống của bài trắc nghiệm IQ",
            mota: "Về mặt cấu trúc bài test có một điểm khác biệt nữa giữa bài IQ Test High Range và Test IQ tiêu chuẩn đó là bài High Range hoàn toàn không có những đáp án gợi ý (câu a, b, c...) để người test chọn. Người đang kiểm tra IQ phải tự suy nghĩ ra đáp án và điền vào chỗ trống của bài trắc nghiệm IQ"
        }
    ];

})();
